import { randomBytes, pbkdf2Sync } from 'crypto';
import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import { Prisma } from '@prisma/client';

function generateHash(salt: string, value: string) {
    return pbkdf2Sync(value, salt, 1000, 64, `sha512`).toString(`hex`);
}

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(dto: AuthDto){
    const salt = randomBytes(16).toString('hex');
    const hash = generateHash(salt, dto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          salt,
          hash,
          updatedAt: new Date()
        },
        select: {
          id: true,
          email: true
        }
      })
      return user
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }

      throw error;
    }
  }

  async signIn(dto: AuthDto){
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email }
    })
    if (!user || (user.hash !== generateHash(user.salt, dto.password))) 
      throw new ForbiddenException('Credentials invalid')

    return "hello"
  }
}