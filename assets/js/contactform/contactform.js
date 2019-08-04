(function ($) {
    'use strict';

    const emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    let formError = false;

    let _getRules = function ($item) {
        let rule = $item.attr('data-rule');

        if (rule === undefined) {
            return false;
        }

        let pos = rule.indexOf(':', 0);
        let exp = rule.substr(pos + 1, rule.length);

        rule = pos >= 0 ? rule.substr(0, pos) : exp;

        return {rule: rule, exp: exp};
    };

    let _validateInputs = function ($formGroup) {
        $formGroup.children('input').each(function () {

            let $input = $(this);
            let result = _getRules($input);

            if (!result) {
                return false;
            }

            switch (result.rule) {
                case 'required':
                    if ($input.val() === '') {
                        formError = true;
                    }
                    break;

                case 'minlen':
                    if ($input.val().length < parseInt(result.exp)) {
                        formError = true;
                    }
                    break;

                case 'email':
                    if (!emailExp.test($input.val())) {
                        formError = true;
                    }
                    break;

                case 'checked':
                    if (!$input.is(':checked')) {
                        formError = true;
                    }
                    break;

                case 'regexp':
                    let exp = new RegExp(result.exp);
                    if (!exp.test($input.val())) {
                        formError = true;
                    }
                    break;
            }
            $input
                .next('.validation')
                .html((formError ? ($input.attr('data-msg') !== undefined ? $input.attr('data-msg') : 'wrong Input') : ''))
                .show('blind');
        });
    };

    let _validateTextarea = function ($formGroup) {
        $formGroup.children('textarea').each(function () {

            let $textarea = $(this);
            let result = _getRules($textarea);

            if (!result) {
                return false;
            }

            switch (result.rule) {
                case 'required':
                    if ($textarea.val() === '') {
                        formError = true;
                    }
                    break;

                case 'minlen':
                    if ($textarea.val().length < parseInt(result.exp)) {
                        formError = true;
                    }
                    break;
            }
            $textarea
                .next('.validation')
                .html((formError ? ($textarea.attr('data-msg') !== undefined ? $textarea.attr('data-msg') : 'wrong Input') : ''))
                .show('blind');
        });
    };

    let _showError = function (message) {
        $('#sendmessage').removeClass('show');
        $('#errormessage').addClass('show');
        $('#errormessage').html(message);
    };

    let _hideError = function () {
        $('#sendmessage').addClass('show');
        $('#errormessage').removeClass('show');
        $('.contactForm').find('input, textarea').val('');
    };

    let _onSubmit = function () {
        let $form = $(this);
        let $formGroup = $form.find('.form-group');
        formError = false;

        _validateInputs($formGroup);
        _validateTextarea($formGroup);

        if (formError) {
            return false;
        }

        const action = $form.data('path');

        if (!action) {
            return false;
        }

        const formData = $form.serialize();

        $.ajax({
            type   : 'POST',
            url    : action,
            data   : formData,
            success: function (result) {
console.log('success - result', result);
                _hideError();
            },
            error  : function (result) {
console.log('error - result', result);
                _showError();
            }
        });
        return false;
    };

    $('form.contactForm').on('submit', _onSubmit);

})(jQuery);
