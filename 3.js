//3
//Crie três variáveis, na primeira variável coloque o total de uma
//compra, por exemplo 149.90. Na segunda variável coloque a
///quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// valor da parcela. Apresente no documento html as seguintes
//informações:
//"O valor total da compra foi R$_,_"
//"Forma de pagamento: _x de R$_,_"

var totalValue = 489.95;
    var amountinstallments = 5;
    var valueInstallments = totalValue / amountinstallments;
    
    document.write(`O valor total da compra foi: ${totalValue} e sua Forma de pagamento: ${amountinstallments} vezes de ${valueInstallments}`);
   