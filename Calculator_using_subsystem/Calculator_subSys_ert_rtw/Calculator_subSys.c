/*
 * File: Calculator_subSys.c
 *
 * Code generated for Simulink model 'Calculator_subSys'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.11 (R2016b) 25-Aug-2016
 * C/C++ source code generated on : Sat Jan 07 18:54:55 2023
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. RAM efficiency
 *    3. ROM efficiency
 * Validation result: Not run
 */

#include "Calculator_subSys.h"
#include "Calculator_subSys_private.h"

/* Real-time model */
RT_MODEL_Calculator_subSys_T Calculator_subSys_M_;
RT_MODEL_Calculator_subSys_T *const Calculator_subSys_M = &Calculator_subSys_M_;

/* Model step function */
void Calculator_subSys_step(void)
{
  /* (no output/update code required) */
}

/* Model initialize function */
void Calculator_subSys_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(Calculator_subSys_M, (NULL));
}

/* Model terminate function */
void Calculator_subSys_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
