/**
 * This library helps monitor input fields and assign helper classes
 * based on input state:
 * - 'has-val' when input field is not empty
 * - 'is-focused' when input field has active focus
 * these two classes useful to enable 'floating' label implementation
 *
 * Usage:
 * ```
 * // in main entry file, such as common.js
 * import Forms from './path-to/forms'
 * const form = new Forms({
 *  wrap: '.field-wrap',       // input parent where helper classes are assigned
 *  forms: 'form.contact-form' // form to be monitored
 * });
 * form.init()
 * ```
 *
 * An example of css to enable floating label:
 * ```
 * <!-- HTML -->
 * <form class="contact-form">
 *  <div class="field-wrap">
 *    <input type="text" class="form-control" id="full_name" name="full_name" />
 *    <label class="control-label" for="full_name">Full Name</label>
 *  </div>
 * </form>
 * ```
 * ```
 * // SCSS file
 * label.control-label {
 *    position: absolute;
 *    transform: translate(0, 0);
 *    transition: transform 0.22s ease;
 * }
 * .field-wrap.has-val,
 * .field-wrap.is-focused {
 *   label.control-label {
 *     transform: translate(0, -36px);
 *   }
 * }
 * ```
 */
const DEFAULTS = {
  wrap: '[data-field-wrap]',
  forms: '.wpcf7-form',
}

class Input {

  constructor($el, options) {
    this.$el = $el
    this.$wrap = this.$el.closest(options.wrap)
    this.$el.attr('autocomplete', 'off')
    this.bind()
  }

  bind () {
    this.$el.on('focus', () => {
      this.onFocus()
    })
    this.$el.on('blur', () => {
      this.onBlur()
    })
    this.$el.on('keyup change blur', () => {
      this.onKeyUp()
    })
  }

  onFocus () {
    this.$wrap.addClass('is-focused')
  }

  onBlur () {
    this.$wrap.removeClass('is-focused')
  }

  onKeyUp () {
    var hasVal = this.$el.val().length && this.$el.val().trim() !== ''
    if (hasVal) this.$wrap.addClass('has-val');
    else this.$wrap.removeClass('has-val');
  }

}

class Forms {

  constructor (options) {
    // Extend options
    this.options = {
      ...DEFAULTS,
      ...options,
    }
  }

  init () {
    let self = this
    this.inputs = []
    $(this.options.forms)
      .find('input[type="text"], input[type="password"], input[type="email"], textarea')
      .each(function () {
        self.inputs.push(new Input($(this), {
          wrap: self.options.wrap,
        }))
      })
  }

}

export default Forms
