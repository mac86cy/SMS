import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class FormValidService {

    constructor() {
    }

    onValueChanged(fg: FormGroup, formErrors: any, validationMessages: any, data?: any) {
        if (!fg) {
            return;
        }
        const form = fg;
        for (const field in formErrors) {
            if (field) {
                formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = validationMessages[field];
                    for (const key in control.errors) {
                        if (key) {
                            formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }
}
