#!/usr/bin/env -S npm run ts-node --transpileOnly

import { Substrate, Jina } from "substrate";

const SUBSTRATE_API_KEY = process.env["SUBSTRATE_API_KEY"];

const substrate = new Substrate({ apiKey: SUBSTRATE_API_KEY });

const args: Jina.Input = {
  docs: [
    {
      text: "There are two ways of quantizing a model: dynamic and static. Dynamic quantization calculates the quantization parameters (scale and zero point) for activations dynamically. These calculations increase the cost of inference, while usually achieve higher accuracy comparing to static ones.There are two ways of quantizing a model: dynamic and static. Dynamic quantization calculates the quantization parameters (scale and zero point) for activations dynamically. These calculations increase the cost of inference, while usually achieve higher accuracy comparing to static ones.There are two ways of quantizing a model: dynamic and static. Dynamic quantization calculates the quantization parameters (scale and zero point) for activations dynamically. These calculations increase the cost of inference, while usually achieve higher accuracy comparing to static ones.There are two ways of quantizing a model: dynamic and static. Dynamic quantization calculates the quantization parameters (scale and zero point) for activations dynamically. These calculations increase the cost of inference, while usually achieve higher accuracy comparing to static ones.There are two ways of quantizing a model: dynamic and static. Dynamic quantization calculates the quantization parameters (scale and zero point) for activations dynamically. These calculations increase the cost of inference, while usually achieve higher accuracy comparing to static ones.There are two ways of quantizing a model: dynamic and static. Dynamic quantization calculates the quantization parameters (scale and zero point) for activations dynamically. These calculations increase the cost of inference, while usually achieve higher accuracy comparing to static ones.There are two ways of quantizing a model: dynamic and static. Dynamic quantization calculates the quantization parameters (scale and zero point) for activations dynamically. These calculations increase the cost of inference, while usually achieve higher accuracy comparing to static ones.There are two ways of quantizing a model: dynamic and static.",
    },
  ],
};

const result = await substrate.models.jina(args);
console.log(JSON.stringify(result));
