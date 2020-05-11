using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class TelefoneChangedRelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Telefones_Fornecedores_FornecedorId",
                table: "Telefones");

            migrationBuilder.AddForeignKey(
                name: "FK_Telefones_Fornecedores_FornecedorId",
                table: "Telefones",
                column: "FornecedorId",
                principalTable: "Fornecedores",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Telefones_Fornecedores_FornecedorId",
                table: "Telefones");

            migrationBuilder.AddForeignKey(
                name: "FK_Telefones_Fornecedores_FornecedorId",
                table: "Telefones",
                column: "FornecedorId",
                principalTable: "Fornecedores",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
