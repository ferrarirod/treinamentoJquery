$(document).ready(function(){
    $('#pesquisa').on('keyup',function(){
        var pesquisa = $(this).val().toLowerCase();
        $('#pesquisaTable tbody tr').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(pesquisa) > -1);
        });
    });
});