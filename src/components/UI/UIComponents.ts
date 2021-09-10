import React from "react";

export interface UiButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  secondary?: boolean;
  onClick?: React.MouseEventHandler;
}

interface UiInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
}

interface UiLabel extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  value: string | readonly string[] | number;
}

export interface UiTextbox {
  className?: string;
  label?: UiLabel;
  input: UiInput;
}
