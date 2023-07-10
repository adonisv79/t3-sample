import { randomBytes, pbkdf2Sync } from 'crypto';
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";


@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(dto: AuthDto){
    const salt = randomBytes(16).toString('hex');
    console.log(salt)
    const hash = pbkdf2Sync(dto.password, salt, 1000, 64, `sha512`).toString(`hex`);
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
  }

  async signIn(){
    return "hello"
  }
}