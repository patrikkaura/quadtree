import { fireEvent, render, screen } from "@testing-library/react";

import { InputForm, Props } from "./InputForm";

describe("InputForm", () => {
  let props: Props;

  beforeEach(() => {
    props = {
      isDataLoaded: false,
      isLoading: false,
      sequence: "",
      threshold: 0,
      onSequenceChange: jest.fn(),
      onThresholdChange: jest.fn(),
      onDataReset: jest.fn(),
      onAnalyseClick: jest.fn(),
    };
  });

  const renderComponent = ({
    componentProps = props,
  }: {
    componentProps?: Props;
  }) => render(<InputForm {...componentProps} />);

  it("should render", () => {
    const { container } = renderComponent({});
    expect(container).toMatchSnapshot();
  });

  it("should call onSequenceChange when sequence input changes", () => {
    renderComponent({});

    const sequenceInput = screen.getByTestId(
      "sequence-input"
    ) as HTMLTextAreaElement;

    fireEvent.change(sequenceInput, { target: { value: "ATG" } });

    expect(props.onSequenceChange).toHaveBeenCalledWith("ATG");
    expect(props.onSequenceChange).toHaveBeenCalledTimes(1);
  });

  it("should call onThresholdChange when threshold input changes", () => {
    renderComponent({});

    const thresholdInput = screen.getByTestId("threshold-input");

    fireEvent.change(thresholdInput, { target: { value: "0.2" } });

    expect(props.onThresholdChange).toHaveBeenCalledWith(0.2);
    expect(props.onThresholdChange).toHaveBeenCalledTimes(1);
  });

  it("should call onDataReset when reset button clicked", () => {
    renderComponent({
      componentProps: {
        ...props,
        isDataLoaded: true,
      },
    });

    const resetButton = screen.getByTestId("reset-button");

    fireEvent.click(resetButton);

    expect(props.onDataReset).toHaveBeenCalledTimes(1);
    expect(props.onDataReset).toHaveBeenCalledWith();
  });

  it("should show input errors when threshold and sequence hits limits", () => {
    renderComponent({
      componentProps: { ...props, sequence: "ATATA", threshold: -1 },
    });

    expect(
      screen
        .getByTestId("threshold-input")
        // eslint-disable-next-line testing-library/no-node-access
        .querySelector("input")
    ).toMatchSnapshot();
    expect(
      screen
        .getByTestId("sequence-input")
        // eslint-disable-next-line testing-library/no-node-access
        .querySelector("textarea")
    ).toMatchSnapshot();
  });

  it("should disable inputs when isDataLoaded", () => {
    renderComponent({
      componentProps: { ...props, isDataLoaded: true },
    });

    expect(screen.getByTestId("sequence-input")).toBeDisabled();
    expect(screen.getByTestId("threshold-input")).toBeDisabled();
  });

  it("should disable inputs when isLoading", () => {
    renderComponent({
      componentProps: { ...props, isLoading: true },
    });

    expect(screen.getByTestId("sequence-input")).toBeDisabled();
    expect(screen.getByTestId("threshold-input")).toBeDisabled();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
