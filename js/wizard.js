$(document).ready(function () {
    var navListItems = $('div.setup-panel div a'), // tab nav items
            allWells = $('.setup-content'), // content div
            allNextBtn = $('.nextBtn'); // next button

    allWells.hide(); // hide all contents by defauld

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });
    // next button
    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='email'],input[type='password'],input[type='url']"),
            isValid = true;
           // Validation
        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }
        // move to next step if valid
        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});

function mostrarDatos() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const postal = document.getElementById("postal").value;
    const direccion = document.getElementById("direccion").value;
    const medio = document.getElementById("medio").value;
    const boton = document.getElementById("miBoton");

    var heading = document.createElement("h2");
    var heading_text = document.createTextNode("Gracias por acercate a nosotros " + "\n" 
        + nombre + "\n" +
        ", Nos contactaremos a través de tu teléfono, " + "\n" + telefono + "\n" +
        " de lo contrario por tu email : " + "\n" + correo + "\n" +
        " que supo de nosotros por ..., " + "\n" + medio + "\n" +
        ".Que vive en, " + "\n" + direccion + "\n" +
        "y su casilla postal es , " + "\n" + postal + "\n" );
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    boton.disabled = true;     
    
}


