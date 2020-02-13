function addModel(select)
{
    $(select).closest('.formRow').find('.customForm').empty();

    if($(select).val() == 1)
    {
        $(select).closest('.formRow').find('.customForm').html($('.formModels .foto').clone());
    }
    else if ($(select).val() == 2)
    {
        $(select).closest('.formRow').find('.customForm').html($('.formModels .adesivo').clone());
    }
    else if ($(select).val() == 3)
    {
        $(select).closest('.formRow').find('.customForm').html($('.formModels .banner').clone());
    }
}

$('#addProduto').click(function(){
    var form = $('.formModels .formRowModel').clone();
    form.removeClass('formRowModel').addClass('formRow');
    $(this).before(form);
});

function calcTotal()
{
    var total = 0;
    $('.formRow').each(function(){
        total += parseFloat($(this).find('[name="preco"]').val());
    });
    $('[name="total"]').val(total.toFixed(2));
}