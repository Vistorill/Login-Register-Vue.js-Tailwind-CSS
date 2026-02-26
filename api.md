# API Documentation - Sistema Completo

## Base URL
```
http://localhost:3000/api
```

---

## 1. Autenticação

### 1.1 Login
**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "token": "string",
    "user": {
      "id": "string",
      "name": "string",
      "email": "string",
      "role": "admin | user | seller",
      "createdAt": "datetime"
    }
  }
}
```

**Response (401):**
```json
{
  "success": false,
  "message": "Email ou senha inválidos"
}
```

---

### 1.2 Registro
**POST** `/auth/register`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "confirmPassword": "string"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "email": "string",
    "createdAt": "datetime"
  }
}
```

**Response (400):**
```json
{
  "success": false,
  "message": "Email já cadastrado"
}
```

---

### 1.3 Logout
**POST** `/auth/logout`

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Logout realizado com sucesso"
}
```

---

## 2. Usuários

### 2.1 Obter Perfil do Usuário
**GET** `/users/profile`

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "email": "string",
    "role": "string",
    "avatar": "string",
    "phone": "string",
    "createdAt": "datetime",
    "updatedAt": "datetime"
  }
}
```

---

### 2.2 Atualizar Perfil
**PUT** `/users/profile`

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "name": "string",
  "phone": "string",
  "avatar": "string"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "email": "string",
    "phone": "string",
    "avatar": "string",
    "updatedAt": "datetime"
  }
}
```

---

## 3. Vendedores (Sellers)

### 3.1 Listar Vendedores
**GET** `/sellers`

**Headers:**
```
Authorization: Bearer {token}
```

**Query Parameters:**
```
page: number (default: 1)
limit: number (default: 10)
search: string (optional)
status: "active" | "inactive" (optional)
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "sellers": [
      {
        "id": "string",
        "name": "string",
        "email": "string",
        "phone": "string",
        "status": "active | inactive",
        "totalSales": "number",
        "commission": "number",
        "createdAt": "datetime"
      }
    ],
    "pagination": {
      "page": "number",
      "limit": "number",
      "total": "number",
      "totalPages": "number"
    }
  }
}
```

---

### 3.2 Criar Vendedor
**POST** `/sellers`

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "commission": "number",
  "status": "active | inactive"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "email": "string",
    "phone": "string",
    "commission": "number",
    "status": "string",
    "createdAt": "datetime"
  }
}
```

---

### 3.3 Atualizar Vendedor
**PUT** `/sellers/:id`

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "name": "string",
  "phone": "string",
  "commission": "number",
  "status": "active | inactive"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "name": "string",
    "email": "string",
    "phone": "string",
    "commission": "number",
    "status": "string",
    "updatedAt": "datetime"
  }
}
```

---

### 3.4 Deletar Vendedor
**DELETE** `/sellers/:id`

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Vendedor deletado com sucesso"
}
```

---

## 4. Pagamentos (Payments)

### 4.1 Listar Pagamentos
**GET** `/payments`

**Headers:**
```
Authorization: Bearer {token}
```

**Query Parameters:**
```
page: number (default: 1)
limit: number (default: 10)
status: "pending" | "completed" | "failed" (optional)
startDate: datetime (optional)
endDate: datetime (optional)
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "payments": [
      {
        "id": "string",
        "amount": "number",
        "status": "pending | completed | failed",
        "method": "credit_card | debit_card | pix | boleto",
        "sellerId": "string",
        "sellerName": "string",
        "customerId": "string",
        "customerName": "string",
        "description": "string",
        "createdAt": "datetime",
        "updatedAt": "datetime"
      }
    ],
    "pagination": {
      "page": "number",
      "limit": "number",
      "total": "number",
      "totalPages": "number"
    }
  }
}
```

---

### 4.2 Criar Pagamento
**POST** `/payments`

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "amount": "number",
  "method": "credit_card | debit_card | pix | boleto",
  "sellerId": "string",
  "customerId": "string",
  "description": "string"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "amount": "number",
    "status": "pending",
    "method": "string",
    "sellerId": "string",
    "customerId": "string",
    "description": "string",
    "createdAt": "datetime"
  }
}
```

---

### 4.3 Atualizar Status do Pagamento
**PATCH** `/payments/:id/status`

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "status": "pending | completed | failed"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "status": "string",
    "updatedAt": "datetime"
  }
}
```

---

## 5. Empréstimos (Loans)

### 5.1 Listar Empréstimos
**GET** `/loans`

**Headers:**
```
Authorization: Bearer {token}
```

**Query Parameters:**
```
page: number (default: 1)
limit: number (default: 10)
status: "pending" | "approved" | "rejected" | "active" | "completed" (optional)
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "loans": [
      {
        "id": "string",
        "customerId": "string",
        "customerName": "string",
        "amount": "number",
        "interestRate": "number",
        "installments": "number",
        "status": "pending | approved | rejected | active | completed",
        "requestDate": "datetime",
        "approvalDate": "datetime",
        "dueDate": "datetime"
      }
    ],
    "pagination": {
      "page": "number",
      "limit": "number",
      "total": "number",
      "totalPages": "number"
    }
  }
}
```

---

### 5.2 Criar Empréstimo
**POST** `/loans`

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "customerId": "string",
  "amount": "number",
  "interestRate": "number",
  "installments": "number"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "customerId": "string",
    "amount": "number",
    "interestRate": "number",
    "installments": "number",
    "status": "pending",
    "requestDate": "datetime"
  }
}
```

---

### 5.3 Aprovar/Rejeitar Empréstimo
**PATCH** `/loans/:id/status`

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "status": "approved | rejected",
  "reason": "string (opcional, obrigatório se rejected)"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "status": "string",
    "approvalDate": "datetime",
    "updatedAt": "datetime"
  }
}
```

---

## 6. Notificações (Notifications)

### 6.1 Listar Notificações
**GET** `/notifications`

**Headers:**
```
Authorization: Bearer {token}
```

**Query Parameters:**
```
page: number (default: 1)
limit: number (default: 10)
read: boolean (optional)
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "notifications": [
      {
        "id": "string",
        "title": "string",
        "message": "string",
        "type": "info | warning | error | success",
        "read": "boolean",
        "createdAt": "datetime"
      }
    ],
    "pagination": {
      "page": "number",
      "limit": "number",
      "total": "number",
      "totalPages": "number"
    }
  }
}
```

---

### 6.2 Marcar como Lida
**PATCH** `/notifications/:id/read`

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "read": true,
    "updatedAt": "datetime"
  }
}
```

---

### 6.3 Marcar Todas como Lidas
**PATCH** `/notifications/read-all`

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Todas as notificações foram marcadas como lidas"
}
```

---

## 7. Relatórios (Reports)

### 7.1 Relatório de Vendas
**GET** `/reports/sales`

**Headers:**
```
Authorization: Bearer {token}
```

**Query Parameters:**
```
startDate: datetime (required)
endDate: datetime (required)
sellerId: string (optional)
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "totalSales": "number",
    "totalAmount": "number",
    "averageTicket": "number",
    "salesByDay": [
      {
        "date": "datetime",
        "count": "number",
        "amount": "number"
      }
    ],
    "topSellers": [
      {
        "sellerId": "string",
        "sellerName": "string",
        "totalSales": "number",
        "totalAmount": "number"
      }
    ]
  }
}
```

---

### 7.2 Relatório Financeiro
**GET** `/reports/financial`

**Headers:**
```
Authorization: Bearer {token}
```

**Query Parameters:**
```
startDate: datetime (required)
endDate: datetime (required)
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "totalRevenue": "number",
    "totalExpenses": "number",
    "netProfit": "number",
    "pendingPayments": "number",
    "completedPayments": "number",
    "activeLoans": "number",
    "completedLoans": "number"
  }
}
```

---

## 8. Analytics

### 8.1 Dashboard Analytics
**GET** `/analytics/dashboard`

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "totalUsers": "number",
    "totalSellers": "number",
    "totalPayments": "number",
    "totalLoans": "number",
    "revenueToday": "number",
    "revenueThisMonth": "number",
    "revenueThisYear": "number",
    "pendingLoans": "number",
    "activeLoans": "number",
    "recentActivity": [
      {
        "id": "string",
        "type": "payment | loan | user | seller",
        "description": "string",
        "timestamp": "datetime"
      }
    ]
  }
}
```

---

## 9. Configurações (Settings)

### 9.1 Obter Configurações
**GET** `/settings`

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "general": {
      "siteName": "string",
      "siteUrl": "string",
      "contactEmail": "string",
      "contactPhone": "string"
    },
    "payment": {
      "defaultInterestRate": "number",
      "maxInstallments": "number",
      "minLoanAmount": "number",
      "maxLoanAmount": "number"
    },
    "notifications": {
      "emailEnabled": "boolean",
      "smsEnabled": "boolean",
      "pushEnabled": "boolean"
    }
  }
}
```

---

### 9.2 Atualizar Configurações
**PUT** `/settings`

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "general": {
    "siteName": "string",
    "contactEmail": "string",
    "contactPhone": "string"
  },
  "payment": {
    "defaultInterestRate": "number",
    "maxInstallments": "number"
  },
  "notifications": {
    "emailEnabled": "boolean",
    "smsEnabled": "boolean"
  }
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "message": "Configurações atualizadas com sucesso",
    "updatedAt": "datetime"
  }
}
```

---

## Códigos de Status HTTP

- **200** - OK
- **201** - Created
- **400** - Bad Request
- **401** - Unauthorized
- **403** - Forbidden
- **404** - Not Found
- **500** - Internal Server Error

---

## Autenticação

Todas as rotas (exceto `/auth/login` e `/auth/register`) requerem autenticação via Bearer Token no header:

```
Authorization: Bearer {token}
```

---

## Paginação

Endpoints que retornam listas suportam paginação com os seguintes parâmetros:

- `page`: Número da página (default: 1)
- `limit`: Itens por página (default: 10, max: 100)

---

## Filtros e Busca

Muitos endpoints suportam filtros via query parameters. Consulte cada endpoint para ver os filtros disponíveis.
