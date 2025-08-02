export abstract class UseCase<TRequest, TResponse> {
  abstract execute(request: TRequest): Promise<TResponse>;

  protected validateRequest(request: TRequest): void {
    if (!request) {
      throw new Error('Request cannot be null or undefined');
    }
  }

  protected async executeWithValidation(request: TRequest): Promise<TResponse> {
    this.validateRequest(request);
    return this.execute(request);
  }
}
