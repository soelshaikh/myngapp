import { Component } from '@angular/core';
import { FormioForm, FormioModule, FormioUtils } from '@formio/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-builder',
  standalone: true,
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss',
  imports: [FormioModule, CommonModule, FormsModule],
})
export class BuilderComponent {
  public formTemplates!: FormioForm[];
  public selectedFormIndex: number;
  public form!: any;
  public formMode: any = 'form';
  public builderOption!: {};

  /**
   * Initializes the form object with an empty title and an empty array of components.
   * Initializes the options for the form with sanitization configurations and builder settings.
   */
  constructor() {
    this.loadFromLocal();
    // Builder options
    this.builderOption = {
      sanitize: true,
      sanitizeConfig: {
        allowedTags: ['', 'sync-grid', 'data-source'], // Specify allowed tags for sanitization
        addTags: ['', 'sync-grid', 'data-source'], // Specify additional tags to add during sanitization
      },
      builder: {
        basic: {
          default: false,
          weight: 1,
        },
        custom: {
          // Specify custom groups
          title: 'Custom Components',
          default: true,
          weight: 0,
        },
      },
    };
    this.selectedFormIndex = -1;
    this.form = { title: '', display: this.formMode, components: [] };
  }

  /**
   * Change the mode of the form.
   * @param event The event object containing the target value.
   */
  changeMode(event: any) {
    this.formMode = event.target.value;
    this.selectedFormIndex = -1;
    this.setForm();
  }

  /**
   * Render the selected template.
   * @param event The event object containing the target value.
   */
  renderTemplate(event: any) {
    if (event.target.value == -1) {
      this.selectedFormIndex = -1;
      this.setForm();
    } else {
      this.selectedFormIndex = event.target.value;
      this.formMode = this.formTemplates[this.selectedFormIndex].display;
      this.setForm(this.formTemplates[this.selectedFormIndex]);
    }
  }

  /**
   * Set the form with the specified form object.
   * @param form The form object to set.
   */
  setForm(form: any = { title: '', display: this.formMode, components: [] }) {
    this.form = form;
  }

  /**
   * Load form templates from local storage.
   */
  loadFromLocal() {
    let existingData = localStorage.getItem('formData');
    if (existingData !== null) {
      this.formTemplates = JSON.parse(existingData);
    }
  }

  /**
   * Handle form change event.
   * @param event The form change event object.
   */
  onChange(event: any): void {
    // Remove Syncfusion premium dialogs
    if (
      event.type === 'updateComponent' &&
      event.component.type === 'syncgridsold'
    ) {
      document
        .querySelectorAll('div[style*="background-color: rgba(0, 0, 0, 0.5)"]')
        .forEach((e) => {
          e.remove();
        });

      document
        .querySelectorAll('div[style*="z-index: 999999999"]')
        .forEach((e) => {
          e.remove();
        });
    }
  }

  /**
   * Handle form submission.
   * - Updates form data in local storage.
   * - Clears the screen title input and displays a submission confirmation alert.
   */
  onSaveForm() {
    let existingData = localStorage.getItem('formData');

    if (existingData === null) {
      this.form.id = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      localStorage.setItem('formData', JSON.stringify([this.form]));
    } else {
      let formsJson = JSON.parse(existingData);
      let alradyExistForm: boolean = false;
      let alradyExistFormIndex: number = -1;

      formsJson.forEach((form: FormioForm, index: number) => {
        if (form.title === this.form.title) {
          alradyExistForm = true;
          alradyExistFormIndex = index;
        }
      });

      if (alradyExistForm) {
        formsJson[alradyExistFormIndex] = this.form;
      } else {
        this.form.id = Math.floor(Math.random() * (999999 - 100000)) + 100000;
        formsJson.push(this.form);
      }
      localStorage.setItem('formData', JSON.stringify(formsJson));
    }
    this.selectedFormIndex = -1;
    this.setForm();
    this.loadFromLocal();
  }
}
