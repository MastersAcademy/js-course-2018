import { NgmodelModule } from './ngmodel.module';

describe('NgmodelModule', () => {
  let ngmodelModule: NgmodelModule;

  beforeEach(() => {
    ngmodelModule = new NgmodelModule();
  });

  it('should create an instance', () => {
    expect(ngmodelModule).toBeTruthy();
  });
});
