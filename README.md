# Gerenciador de Fornecedores

Projeto criado usando as tecnologias ASP.NET Core + EF Core + AutoMapper + FluentValidation + MediatR e Angular 9,
usando o conceito de Clean Architecture.


- Domain
  - "Todas entidades"
- Application
  - "Todas regras de negocio"
  - Commons
    - Temos Dtos, Behaviours para o MediatR por enquanto apenas para validaçções
    - Interfaces e Mappings
  - Empresas
    - Aqui tem todos os comandos, queries e validações
  - Fornecedores
    - Aqui segue a mesma estrutura de Empresas
- Persistence
  - "Configurações das entidades e DbContext"
- Presentation
  - "Controllers e o ClientApp feito em Angular 9"
