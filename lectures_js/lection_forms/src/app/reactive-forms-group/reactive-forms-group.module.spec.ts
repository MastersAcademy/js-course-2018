import { ReactiveFormsGroupModule } from './reactive-forms-group.module';

describe('ReactiveFormsGroupModule', () => {
  let reactiveFormsGroupModule: ReactiveFormsGroupModule;

  beforeEach(() => {
    reactiveFormsGroupModule = new ReactiveFormsGroupModule();
  });

  it('should create an instance', () => {
    expect(reactiveFormsGroupModule).toBeTruthy();
  });
});
