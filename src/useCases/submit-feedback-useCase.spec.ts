import { SubmitFeedbackUseCase } from "./submit-feedback-useCase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("Should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Tudo errado e bugado",
        screenshot: "data:/image/png;base64,9352893y5",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("Should not be able to submit feedback without a type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Tudo errado e bugado",
        screenshot: "data:/image/png;base64,9352893y5",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit feedback without a comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:/image/png;base64,9352893y5",
      })
    ).rejects.toThrow();
  });

  it("Should not be able to submit feedback with a invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "tudo errado",
        screenshot: "print invalida",
      })
    ).rejects.toThrow();
  });
});
