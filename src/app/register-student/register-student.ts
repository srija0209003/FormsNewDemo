import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-student',
  standalone: false,
  templateUrl: './register-student.html',
  styleUrls: ['./register-student.css']
})
export class RegisterStudent {
  registerStud!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerStud = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileno: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      skillInput: [''],
      studskills: this.fb.array([])
    });
  }

  /** Convenience getter for the skills FormArray */
  get studskills(): FormArray {
    return this.registerStud.get('studskills') as FormArray;
  }

  /** Add a skill from the input into the FormArray */
  addSkills(): void {
    const data = this.registerStud.get('skillInput')?.value?.trim();
    if (data) {
      this.studskills.push(this.fb.control(data));
      this.registerStud.get('skillInput')?.reset();
    }
  }

  /** Remove a skill at a given index */
  removeSkills(index: number): void {
    this.studskills.removeAt(index);
  }

  /** Example "get skills" that alerts the current array values */
  getSkills(): void {
    const skills = this.studskills.value; // array of strings
    alert(`Skills: ${skills.join(', ')}`);
  }

  submit(): void {
    if(this.registerStud.value.password !== this.registerStud.value.confirmpassword){
      alert('Password and Confirm Password do not match!');
      return;
    }else{
      console.log(this.registerStud.value);
      alert('Student registered successfully!');
    }
    
  }
}
