import { Routes } from '@angular/router';
import { PracticeComponent } from './practice/practice.component';
import { KycComponent } from './kyc/kyc.component';


export const routes: Routes = [
    {
        path: 'practice',
        component: PracticeComponent
    },
    {
        path : 'kyc',
        component: KycComponent
    }
];
