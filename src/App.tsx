import { useState } from 'react';
import { StepOne } from './components/StepOne';
import { StepTwo } from './components/StepTwo';
import { DataReadinessStep } from './components/DataReadinessStep';
import { UXReadinessStep } from './components/UXReadinessStep';
 
 type ResponseValue = 'yes' | 'no' | 'planned';