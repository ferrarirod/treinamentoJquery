function addModel(select)
{
    $(select).closest('.formRow').find('.customForm').empty();

    if($(select).val() == 1)
    {
        $(select).closest('.formRow').find('.customForm').html($('.formModels .foto').contents().clone());
    }
    else if ($(select).val() == 2)
    {
        $(select).closest('.formRow').find('.customForm').html($('.formModels .adesivo').contents().clone());
    }
    else if ($(select).val() == 3)
    {
        $(select).closest('.formRow').find('.customForm').html($('.formModels .banner').contents().clone());
    }
}