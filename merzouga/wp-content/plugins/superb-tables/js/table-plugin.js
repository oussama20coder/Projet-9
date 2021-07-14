;var spbtblNM = {};
;(function($){
spbtblNM.func = {
// spbtbl functionality
updateRows: function(){
dndi = 0;
dndj = -1;

$('#spbtbl > thead  > tr > th').each(function(){
$(this).find('.text_input').attr('name','colValues['+dndi+']['+dndj+']')
dndj++;
});
dndj=-1;
$('#spbtbl > tbody  > tr').each(function(){
$(this).find('td').each (function() {
$(this).find('.text_input').attr('name','rowValues['+dndi+']['+dndj+']')
dndj++;
});
dndj=-1;
dndi++;
});
}
}

})(jQuery);



jQuery(document).ready(function ($) {

$('#spbtbl').tableDnD();

function spbtbl_addEventClick(){

$('.spbtbl_removeRow').off();
$('.spbtbl_removeRow').click(function() {	
			var target = $(this).closest("tr");
			spbtbl_confirm("Remove Row", "Are you sure you want to remove this row?", "Remove", "Cancel", function(){
			spbtbl_updateValues("subtract", "row");		
			$(target).remove();
			spbtblNM.func.updateRows();
			});
			});


$('.spbtbl_removeCol').off();
$('.spbtbl_removeCol').click(function() {	
			var target = $(this);

			spbtbl_confirm("Remove Column", "Are you sure you want to remove this column?", "Remove", "Cancel", function(){
			spbtbl_updateValues("subtract");	
			spbtbl_columnUpdate($(target).data("value"), "remove");
			$(target).closest("th").remove();
			spbtblNM.func.updateRows();
			});
	});

}

function spbtbl_columnUpdate(number, func){
	var table = document.getElementById('spbtbl');
	if(func=="remove"){
	for(i=1;i < table.rows.length; i++){
		table.rows[i].deleteCell(number);
	}
	$('.spbtbl_removeCol').each(function(i,obj){
			if($(obj).data("value")>number){
				$(obj).data("value",i);
				obj.setAttribute("data-value",i);
			}

		});
	} else {
		for(i=1;i < table.rows.length; i++){
		cell = table.rows[i].insertCell(number);
		cell.innerHTML = "<textarea class='text_input' placeholder='"+defaultCellText+"' rows='1' data-min-rows='1' name='rowValues["+(i-1)+"]["+(number-1)+"]'></textarea>";;
	}
	}

}

function spbtbl_updateValues(func, type){
			var rowNum = parseInt($('#spbtbl_rowNum').attr('value'));
			var colNum = parseInt($('#spbtbl_colNum').attr('value'));
			if(type=="row"){
			if(func == "subtract"){ 
				$('#spbtbl_rowNum').val(rowNum-1);
			} else { 
				$('#spbtbl_rowNum').val(rowNum+1);
			}
			} else{
				if(func == "subtract"){ 
				$('#spbtbl_colNum').val(colNum-1);
			} else { 
				$('#spbtbl_colNum').val(colNum+1);
			}
			}
}



spbtbl_addEventClick();

$('#spbtbl_addRow').click(function() {
			
			var table = document.getElementById('spbtbl');
			var colNum = parseInt($('#spbtbl_colNum').attr('value'));
			var rowNum = parseInt($('#spbtbl_rowNum').attr('value'));
			var row = table.insertRow(rowNum);
			var removerowCell = row.insertCell(0);
			removerowCell.outerHTML = "<td class='hidden_row'><input class='spbtbl_dragRow' style='cursor: move;' type='button' /><input class='spbtbl_removeRow' type='button' /></td>";
			
			for(i=1;i<colNum;i++){
				cell = row.insertCell(i);
				cell.innerHTML = "<textarea class='text_input' placeholder='"+defaultCellText+"' rows='1' data-min-rows='1' name='rowValues["+(rowNum-1)+"]["+(i-1)+"]'></textarea>";

			}
			
		spbtbl_updateValues("","row");	
		spbtbl_addEventClick();
	});

$('#spbtbl_addCol').click(function() {
			
			var table = document.getElementById('spbtbl');
			var colNum = parseInt($('#spbtbl_colNum').attr('value'));
			table.rows[0].insertCell(-1).outerHTML = "<th align='left'><input placeholder='"+defaultCellText+"' type='text' name='colValues[0]["+(colNum-1)+"]' class='text_input' value=''><input class='spbtbl_removeCol' type='button' data-value='"+colNum+"' /></th>";
		spbtbl_columnUpdate($('#spbtbl_colNum').attr('value'), "");
		spbtbl_updateValues();	
		spbtbl_addEventClick();
	});


$('#colorSelect').change(function() {
$('#spbtbl').removeClass().addClass('spbtbl-style backend spbtbl-color-'+this.value);
});

$('#fontTHinput').change(function() {
	fontsize_th = this.value;
$('#spbtbl > thead  > tr > th').each(function(){
$(this).find('textarea').attr('style','font-size:'+fontsize_th+'px !important;');
});
});

$('#fontTDinput').change(function() {
	fontsize_td = this.value;
$('#spbtbl > tbody  > tr > td').each(function(){
$(this).find('.text_input').attr('style','font-size:'+fontsize_td+'px !important;');
});
});

if(typeof colorScheme !== undefined){
	$('#colorSelect').val(colorScheme);
}

if(typeof tableStyle !== undefined){
	$('#styleSelect').val(tableStyle);
}

if(typeof fontsize_td !== undefined){
	$('#fontTDinput').val(fontsize_td);
	$('#spbtbl > tbody  > tr > td').each(function(){
	$(this).find('.text_input').attr('style','font-size:'+fontsize_td+'px !important;');
	});
}

if(typeof fontsize_th !== undefined){
	$('#fontTHinput').val(fontsize_th);
	$('#spbtbl > thead  > tr > th').each(function(){
	$(this).find('textarea').attr('style','font-size:'+fontsize_th+'px !important;');
	});
}

if(typeof floatmode !== undefined){
	$('#floatmodeSelect').val(floatmode);
}

if(typeof fullwidth !== undefined){
	$('#fullwidthSelect').val(fullwidth);
}

if(typeof disableschema !== undefined){
	$('#disableschemaSelect').val(disableschema);
}


$('.spbtbl_btn.delete_btn').click(function(e) {	
			e.preventDefault();
			var target = $(this).attr("href");
			spbtbl_confirm("Delete Table", "Are you sure you want to delete this table?", "Delete", "Cancel", function(){
				window.location.href = target;
			});
});


$('.spbtbl_shortcode').click(function() {

			this.setSelectionRange(0, this.value.length)
});

$(".spbtbl_success").fadeOut(15000, function() { $(this).remove(); });

    $('#spbtbl').on('focus.text_input', 'textarea.text_input', function(){
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    });
    $('#spbtbl').on('input.text_input', 'textarea.text_input', function(){
        var minRows = this.getAttribute('data-min-rows')|0, rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
        this.rows = minRows + rows;
    });




function spbtbl_confirm(title, msg, $true, $false, callback) { /*change*/
        var $content =  "<div class='spbtbl_dialog-ovelay'>" +
                        "<div class='spbtbl_dialog'><header>" +
                         " <h3> " + title + " </h3> " +
                         "<i class='spbtbl_fa spbtbl_fa-close'></i>" +
                     "</header>" +
                     "<div class='spbtbl_dialog-msg'>" +
                         " <p> " + msg + " </p> " +
                     "</div>" +
                     "<footer>" +
                         "<div class='spbtbl_controls'>" +
                             " <button class='spbtbl_button spbtbl_button-danger doAction'>" + $true + "</button> " +
                             " <button class='spbtbl_button spbtbl_button-default cancelAction'>" + $false + "</button> " +
                         "</div>" +
                     "</footer>" +
                  "</div>" +
                "</div>";
         $('#wpcontent').prepend($content);
      $('.doAction').click(function () {
        $(this).parents('.spbtbl_dialog-ovelay').fadeOut(500, function () {
          $(this).remove();
        });
        callback();
        return true;
      });
$('.cancelAction, .fa-close').click(function () {
        $(this).parents('.spbtbl_dialog-ovelay').fadeOut(500, function () {
          $(this).remove();
        });
        return false;
      });
      
   }




});

