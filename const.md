# Guia Completo: Construindo uma API com NestJS e MySQL

## Introdução

Este guia apresenta um passo a passo detalhado para construir uma **API RESTful completa** utilizando **NestJS** no backend e **MySQL** como banco de dados. A API inclui autenticação com JWT, gerenciamento de usuários, vendedores, pagamentos, empréstimos, notificações, relatórios e analytics.

O projeto final será uma aplicação robusta, escalável e pronta para produção, perfeita para seu portfólio profissional.

---

## Parte 1: Configuração Inicial do Projeto

### 1.1 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js 18+** (https://nodejs.org/)
- **npm ou pnpm** (gerenciador de pacotes)
- **MySQL 8.0+** (https://www.mysql.com/downloads/)
- **Git** (controle de versão)
- **Visual Studio Code** (editor recomendado)

Verifique as versões instaladas:

```bash
node --version
npm --version
mysql --version
git --version
```

### 1.2 Instalando o NestJS CLI

O NestJS CLI facilita a criação e gerenciamento do projeto. Instale globalmente:

```bash
npm install -g @nestjs/cli
```

Verifique a instalação:

```bash
nest --version
```

### 1.3 Criando o Projeto NestJS

Crie um novo projeto NestJS com o seguinte comando:

```bash
nest new api-sistema-completo
```

Durante o processo, escolha o gerenciador de pacotes que prefere (npm ou pnpm). Após a criação, navegue até o diretório do projeto:

```bash
cd api-sistema-completo
```

### 1.4 Instalando Dependências Essenciais

Instale as dependências necessárias para o projeto:

```bash
npm install @nestjs/typeorm typeorm mysql2 bcryptjs jsonwebtoken passport passport-jwt @nestjs/jwt @nestjs/passport class-validator class-transformer axios
npm install -D @types/bcryptjs @types/jsonwebtoken
```

Descrição das dependências instaladas:

| Pacote | Versão | Descrição |
|--------|--------|-----------|
| @nestjs/typeorm | ^10.0.0 | ORM para NestJS |
| typeorm | ^0.3.0 | ORM TypeScript |
| mysql2 | ^3.0.0 | Driver MySQL |
| bcryptjs | ^2.4.0 | Criptografia de senhas |
| jsonwebtoken | ^9.0.0 | Geração de tokens JWT |
| passport | ^0.6.0 | Autenticação |
| @nestjs/jwt | ^11.0.0 | Integração JWT com NestJS |
| @nestjs/passport | ^10.0.0 | Integração Passport com NestJS |
| class-validator | ^0.14.0 | Validação de DTOs |
| class-transformer | ^0.5.0 | Transformação de dados |

### 1.5 Estrutura de Diretórios

Crie a seguinte estrutura de diretórios para organizar o projeto:

```
api-sistema-completo/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── jwt.strategy.ts
│   │   ├── jwt-auth.guard.ts
│   │   └── dtos/
│   │       ├── login.dto.ts
│   │       └── register.dto.ts
│   ├── users/
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.module.ts
│   │   ├── user.entity.ts
│   │   └── dtos/
│   │       ├── create-user.dto.ts
│   │       └── update-user.dto.ts
│   ├── sellers/
│   │   ├── sellers.controller.ts
│   │   ├── sellers.service.ts
│   │   ├── sellers.module.ts
│   │   ├── seller.entity.ts
│   │   └── dtos/
│   │       ├── create-seller.dto.ts
│   │       └── update-seller.dto.ts
│   ├── payments/
│   │   ├── payments.controller.ts
│   │   ├── payments.service.ts
│   │   ├── payments.module.ts
│   │   ├── payment.entity.ts
│   │   └── dtos/
│   │       ├── create-payment.dto.ts
│   │       └── update-payment-status.dto.ts
│   ├── loans/
│   │   ├── loans.controller.ts
│   │   ├── loans.service.ts
│   │   ├── loans.module.ts
│   │   ├── loan.entity.ts
│   │   └── dtos/
│   │       ├── create-loan.dto.ts
│   │       └── update-loan-status.dto.ts
│   ├── notifications/
│   │   ├── notifications.controller.ts
│   │   ├── notifications.service.ts
│   │   ├── notifications.module.ts
│   │   ├── notification.entity.ts
│   │   └── dtos/
│   │       └── create-notification.dto.ts
│   ├── reports/
│   │   ├── reports.controller.ts
│   │   ├── reports.service.ts
│   │   └── reports.module.ts
│   ├── analytics/
│   │   ├── analytics.controller.ts
│   │   ├── analytics.service.ts
│   │   └── analytics.module.ts
│   ├── settings/
│   │   ├── settings.controller.ts
│   │   ├── settings.service.ts
│   │   ├── settings.module.ts
│   │   ├── setting.entity.ts
│   │   └── dtos/
│   │       └── update-settings.dto.ts
│   ├── common/
│   │   ├── decorators/
│   │   │   └── current-user.decorator.ts
│   │   ├── filters/
│   │   │   └── http-exception.filter.ts
│   │   ├── interceptors/
│   │   │   └── response.interceptor.ts
│   │   └── pipes/
│   │       └── validation.pipe.ts
│   ├── database/
│   │   ├── database.module.ts
│   │   └── typeorm.config.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── .env.example
├── .env
├── .gitignore
├── docker-compose.yml
├── ormconfig.json
├── package.json
└── tsconfig.json
```

Crie as pastas manualmente:

```bash
mkdir -p src/{auth,users,sellers,payments,loans,notifications,reports,analytics,settings,common,database}/{dtos,decorators,filters,interceptors,pipes}
```

---

## Parte 2: Configuração do Banco de Dados

### 2.1 Configurando MySQL com Docker (Opcional)

Se você deseja usar Docker para MySQL, crie um arquivo `docker-compose.yml`:

```yaml
version: '3.8'

services:
  mysql:
    image: mysql:8.0
    container_name: sistema_mysql
    environment:
      MYSQL_ROOT_PASSWORD: root123
      MYSQL_DATABASE: sistema_db
      MYSQL_USER: usuario
      MYSQL_PASSWORD: senha123
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - sistema_network

networks:
  sistema_network:
    driver: bridge

volumes:
  mysql_data:
    driver: local
```

Inicie o MySQL com Docker:

```bash
docker-compose up -d
```

### 2.2 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Database
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=usuario
DB_PASSWORD=senha123
DB_DATABASE=sistema_db

# JWT
JWT_SECRET=sua_chave_secreta_super_segura_aqui_123456789
JWT_EXPIRATION=24h

# App
APP_PORT=3000
APP_ENV=development
```

Crie um arquivo `.env.example` para referência:

```env
# Database
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=usuario
DB_PASSWORD=senha123
DB_DATABASE=sistema_db

# JWT
JWT_SECRET=sua_chave_secreta_aqui
JWT_EXPIRATION=24h

# App
APP_PORT=3000
APP_ENV=development
```

### 2.3 Configurando TypeORM

Crie o arquivo `src/database/typeorm.config.ts`:

```typescript
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USERNAME || 'usuario',
  password: process.env.DB_PASSWORD || 'senha123',
  database: process.env.DB_DATABASE || 'sistema_db',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: process.env.APP_ENV !== 'production',
  logging: process.env.APP_ENV === 'development',
  dropSchema: false,
};
```

Crie o arquivo `src/database/database.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig)],
})
export class DatabaseModule {}
```

---

## Parte 3: Entidades do Banco de Dados

### 3.1 Entidade User

Crie o arquivo `src/users/user.entity.ts`:

```typescript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Payment } from '../payments/payment.entity';
import { Loan } from '../loans/loan.entity';
import { Notification } from '../notifications/notification.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'enum', enum: ['admin', 'user', 'seller'], default: 'user' })
  role: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  phone: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Payment, (payment) => payment.customer)
  payments: Payment[];

  @OneToMany(() => Loan, (loan) => loan.customer)
  loans: Loan[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];
}
```

### 3.2 Entidade Seller

Crie o arquivo `src/sellers/seller.entity.ts`:

```typescript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Payment } from '../payments/payment.entity';

@Entity('sellers')
export class Seller {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  commission: number;

  @Column({ type: 'enum', enum: ['active', 'inactive'], default: 'active' })
  status: string;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0 })
  totalSales: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Payment, (payment) => payment.seller)
  payments: Payment[];
}
```

### 3.3 Entidade Payment

Crie o arquivo `src/payments/payment.entity.ts`:

```typescript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Seller } from '../sellers/seller.entity';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  amount: number;

  @Column({ type: 'enum', enum: ['pending', 'completed', 'failed'], default: 'pending' })
  status: string;

  @Column({ type: 'enum', enum: ['credit_card', 'debit_card', 'pix', 'boleto'] })
  method: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  description: string;

  @Column({ type: 'varchar' })
  sellerId: string;

  @Column({ type: 'varchar' })
  customerId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Seller, (seller) => seller.payments)
  @JoinColumn({ name: 'sellerId' })
  seller: Seller;

  @ManyToOne(() => User, (user) => user.payments)
  @JoinColumn({ name: 'customerId' })
  customer: User;
}
```

### 3.4 Entidade Loan

Crie o arquivo `src/loans/loan.entity.ts`:

```typescript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('loans')
export class Loan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  customerId: string;

  @Column({ type: 'decimal', precision: 15, scale: 2 })
  amount: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  interestRate: number;

  @Column({ type: 'int' })
  installments: number;

  @Column({ type: 'enum', enum: ['pending', 'approved', 'rejected', 'active', 'completed'], default: 'pending' })
  status: string;

  @Column({ type: 'text', nullable: true })
  rejectionReason: string;

  @CreateDateColumn()
  requestDate: Date;

  @Column({ type: 'datetime', nullable: true })
  approvalDate: Date;

  @Column({ type: 'datetime', nullable: true })
  dueDate: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.loans)
  @JoinColumn({ name: 'customerId' })
  customer: User;
}
```

### 3.5 Entidade Notification

Crie o arquivo `src/notifications/notification.entity.ts`:

```typescript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ type: 'enum', enum: ['info', 'warning', 'error', 'success'], default: 'info' })
  type: string;

  @Column({ type: 'boolean', default: false })
  read: boolean;

  @Column({ type: 'varchar' })
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.notifications)
  @JoinColumn({ name: 'userId' })
  user: User;
}
```

### 3.6 Entidade Setting

Crie o arquivo `src/settings/setting.entity.ts`:

```typescript
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';

@Entity('settings')
export class Setting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  key: string;

  @Column({ type: 'longtext' })
  value: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  category: string;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

---

## Parte 4: Autenticação com JWT

### 4.1 DTO de Login

Crie o arquivo `src/auth/dtos/login.dto.ts`:

```typescript
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
```

### 4.2 DTO de Registro

Crie o arquivo `src/auth/dtos/register.dto.ts`:

```typescript
import { IsEmail, IsString, MinLength, IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(6)
  confirmPassword: string;
}
```

### 4.3 JWT Strategy

Crie o arquivo `src/auth/jwt.strategy.ts`:

```typescript
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    const user = await this.usersService.findById(payload.sub);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  }
}
```

### 4.4 JWT Auth Guard

Crie o arquivo `src/auth/jwt-auth.guard.ts`:

```typescript
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
```

### 4.5 Auth Service

Crie o arquivo `src/auth/auth.service.ts`:

```typescript
import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { name, email, password, confirmPassword } = registerDto;

    if (password !== confirmPassword) {
      throw new BadRequestException('As senhas não coincidem');
    }

    const existingUser = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('Email já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersService.create({
      name,
      email,
      password: hashedPassword,
      role: 'user',
    });

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const
(Content truncated due to size limit. Use line ranges to read remaining content)