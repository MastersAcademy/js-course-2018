import { ReactiveFormsControlModule } from './reactive-forms-control.module';

describe('ReactiveFormsControlModule', () => {
  let reactiveFormsControlModule: ReactiveFormsControlModule;

  beforeEach(() => {
    reactiveFormsControlModule = new ReactiveFormsControlModule();
  });

  it('should create an instance', () => {
    expect(reactiveFormsControlModule).toBeTruthy();
  });
});
