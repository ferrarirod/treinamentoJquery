function precoFotos(input)
{
    var row = $(input).closest('.foto');
    if(row.find('[name="tamanhoFoto[]"]').val() == 0)
    {
        row.find('[name="preco"]').val(parseFloat(0.5 * row.find('[name="quantidadeFoto[]"]').val()).toFixed(2));
    }
    else if(row.find('[name="tamanhoFoto[]"]').val() == 1)
    {
        row.find('[name="preco"]').val(parseFloat(2.5 * row.find('[name="quantidadeFoto[]"]').val()).toFixed(2));   
    }
    calcTotal();
}

function precoAdesivo(input)
{
    var row = $(input).closest('.adesivo');
    area = parseFloat(row.find('[name="altAdesivo[]"]').val() * row.find('[name="compAdesivo[]"]').val() * row.find('[name="qtdAdesivo[]"]').val()).toFixed(2);
    if(area < 3)
    {
        row.find('[name="preco"]').val('3.00');
    }
    else
    {
        row.find('[name="preco"]').val(parseFloat(area * 1.5).toFixed(2));   
    }
    calcTotal();
}

function precoBanner(input)
{
    var row = $(input).closest('.banner');
    area = parseFloat(row.find('[name="altBanner[]"]').val() * row.find('[name="compBanner[]"]').val() * row.find('[name="qtdBanner[]"]').val()).toFixed(2);
    if(area < 10)
    {
        row.find('[name="preco"]').val('10.00');
    }
    else
    {
        row.find('[name="preco"]').val(parseFloat(area * 5).toFixed(2));   
    }
    calcTotal();
}