{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.python3
    pkgs.git
    pkgs.pre-commit
    # Add the C compiler here
    pkgs.gcc
  ];
}