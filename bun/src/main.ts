import { NestFactory } from "@nestjs/core";
import { CatsModule } from "./user/user.module";

async function bootstrap() {
  const app = await NestFactory.create(CatsModule);
  await app.listen(3000);
}
await bootstrap();
