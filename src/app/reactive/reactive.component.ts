import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  name!: string;

  constructor(private readonly fb: FormBuilder, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
        this.name = params['name'];
      }
    )
    this.contactForm = this.initForm();
    this.onPatchValue();
    // this.onSetValue();
  }

  onPatchValue(): void {
    this.contactForm.patchValue({name: 'Gaboh'});
  }

  onSetValue(): void {
    this.contactForm.setValue({comment: 'No hay comentarios'});
  }

  onSubmit(): void {
    console.log('Form ->', this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required, Validators.maxLength(200)]],
    })
  }
}
