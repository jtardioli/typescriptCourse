let userInput: unknown;

userInput = 5;
userInput = "JOsh";

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
