// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface BuyMeACoffee$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "BuyMeACoffee",
  "sourceName": "contracts/BuyMeACoffee.sol",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "InsufficientFunds",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OnlyOwner",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "BuyMeACoffeeEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "time",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "numCoffees",
          "type": "uint256"
        }
      ],
      "name": "NewFunder",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "numCoffees",
          "type": "uint256"
        }
      ],
      "name": "buyCoffee",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "coffee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "funders",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "numCoffees",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "price",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052678ac7230489e800006003553480156200001d57600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620000726003546200007e60201b60201c565b60028190555062000387565b60008062000091620000c060201b60201c565b90506000816305f5e10085620000a8919062000195565b620000b491906200020f565b90508092505050919050565b60008073694aa1769357215de4fac081bf1f309adc325306905060008173ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa15801562000128573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200014e9190620002ff565b505050915050809250505090565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620001a2826200015c565b9150620001af836200015c565b9250828202620001bf816200015c565b91508282048414831517620001d957620001d862000166565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006200021c826200015c565b915062000229836200015c565b9250826200023c576200023b620001e0565b5b828204905092915050565b600080fd5b600069ffffffffffffffffffff82169050919050565b6200026d816200024c565b81146200027957600080fd5b50565b6000815190506200028d8162000262565b92915050565b6000819050919050565b620002a88162000293565b8114620002b457600080fd5b50565b600081519050620002c8816200029d565b92915050565b620002d9816200015c565b8114620002e557600080fd5b50565b600081519050620002f981620002ce565b92915050565b600080600080600060a086880312156200031e576200031d62000247565b5b60006200032e888289016200027c565b95505060206200034188828901620002b7565b94505060406200035488828901620002e8565b93505060606200036788828901620002e8565b92505060806200037a888289016200027c565b9150509295509295909350565b6107ac80620003976000396000f3fe6080604052600436106100555760003560e01c80633ccfd60b1461005a5780636440c6d8146100715780638da5cb5b1461009c578063a035b1fe146100c7578063b03b4a29146100f2578063dc0d3dff1461010e575b600080fd5b34801561006657600080fd5b5061006f61014c565b005b34801561007d57600080fd5b506100866102de565b60405161009391906104e4565b60405180910390f35b3480156100a857600080fd5b506100b16102e4565b6040516100be9190610540565b60405180910390f35b3480156100d357600080fd5b506100dc61030a565b6040516100e991906104e4565b60405180910390f35b61010c6004803603810190610107919061058c565b610310565b005b34801561011a57600080fd5b506101356004803603810190610130919061058c565b610477565b6040516101439291906105b9565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101d3576040517f5fc483c500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000470361020d576040517f356680b700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff164760405161025590610613565b60006040518083038185875af1925050503d8060008114610292576040519150601f19603f3d011682016040523d82523d6000602084013e610297565b606091505b50509050806102db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d290610685565b60405180910390fd5b50565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b8060025461031e91906106d4565b341015610357576040517f356680b700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f6c786e8cbaf5f056129cce184bf072f2a16cb9af797b5d5dc57f280897eddaa13334604051610388929190610716565b60405180910390a1600060405180604001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff1681525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050507f72a81bb95cf3aa9c7033351aee7b3e64f7d6dc3d928515cf1082e56ed4f961b133428360405161046c9392919061073f565b60405180910390a150565b6000818154811061048757600080fd5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b6000819050919050565b6104de816104cb565b82525050565b60006020820190506104f960008301846104d5565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061052a826104ff565b9050919050565b61053a8161051f565b82525050565b60006020820190506105556000830184610531565b92915050565b600080fd5b610569816104cb565b811461057457600080fd5b50565b60008135905061058681610560565b92915050565b6000602082840312156105a2576105a161055b565b5b60006105b084828501610577565b91505092915050565b60006040820190506105ce60008301856104d5565b6105db6020830184610531565b9392505050565b600081905092915050565b50565b60006105fd6000836105e2565b9150610608826105ed565b600082019050919050565b600061061e826105f0565b9150819050919050565b600082825260208201905092915050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b600061066f601483610628565b915061067a82610639565b602082019050919050565b6000602082019050818103600083015261069e81610662565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006106df826104cb565b91506106ea836104cb565b92508282026106f8816104cb565b9150828204841483151761070f5761070e6106a5565b5b5092915050565b600060408201905061072b6000830185610531565b61073860208301846104d5565b9392505050565b60006060820190506107546000830186610531565b61076160208301856104d5565b61076e60408301846104d5565b94935050505056fea26469706673582212209dfb16ee544de58ef7ceb1d717b5291118ff387cb104ca2538a54c906f22d05064736f6c63430008180033",
  "deployedBytecode": "0x6080604052600436106100555760003560e01c80633ccfd60b1461005a5780636440c6d8146100715780638da5cb5b1461009c578063a035b1fe146100c7578063b03b4a29146100f2578063dc0d3dff1461010e575b600080fd5b34801561006657600080fd5b5061006f61014c565b005b34801561007d57600080fd5b506100866102de565b60405161009391906104e4565b60405180910390f35b3480156100a857600080fd5b506100b16102e4565b6040516100be9190610540565b60405180910390f35b3480156100d357600080fd5b506100dc61030a565b6040516100e991906104e4565b60405180910390f35b61010c6004803603810190610107919061058c565b610310565b005b34801561011a57600080fd5b506101356004803603810190610130919061058c565b610477565b6040516101439291906105b9565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101d3576040517f5fc483c500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000470361020d576040517f356680b700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff164760405161025590610613565b60006040518083038185875af1925050503d8060008114610292576040519150601f19603f3d011682016040523d82523d6000602084013e610297565b606091505b50509050806102db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d290610685565b60405180910390fd5b50565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b8060025461031e91906106d4565b341015610357576040517f356680b700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f6c786e8cbaf5f056129cce184bf072f2a16cb9af797b5d5dc57f280897eddaa13334604051610388929190610716565b60405180910390a1600060405180604001604052808381526020013373ffffffffffffffffffffffffffffffffffffffff1681525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050507f72a81bb95cf3aa9c7033351aee7b3e64f7d6dc3d928515cf1082e56ed4f961b133428360405161046c9392919061073f565b60405180910390a150565b6000818154811061048757600080fd5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905082565b6000819050919050565b6104de816104cb565b82525050565b60006020820190506104f960008301846104d5565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061052a826104ff565b9050919050565b61053a8161051f565b82525050565b60006020820190506105556000830184610531565b92915050565b600080fd5b610569816104cb565b811461057457600080fd5b50565b60008135905061058681610560565b92915050565b6000602082840312156105a2576105a161055b565b5b60006105b084828501610577565b91505092915050565b60006040820190506105ce60008301856104d5565b6105db6020830184610531565b9392505050565b600081905092915050565b50565b60006105fd6000836105e2565b9150610608826105ed565b600082019050919050565b600061061e826105f0565b9150819050919050565b600082825260208201905092915050565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b600061066f601483610628565b915061067a82610639565b602082019050919050565b6000602082019050818103600083015261069e81610662565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006106df826104cb565b91506106ea836104cb565b92508282026106f8816104cb565b9150828204841483151761070f5761070e6106a5565b5b5092915050565b600060408201905061072b6000830185610531565b61073860208301846104d5565b9392505050565b60006060820190506107546000830186610531565b61076160208301856104d5565b61076e60408301846104d5565b94935050505056fea26469706673582212209dfb16ee544de58ef7ceb1d717b5291118ff387cb104ca2538a54c906f22d05064736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "BuyMeACoffee",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<BuyMeACoffee$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/BuyMeACoffee.sol:BuyMeACoffee",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<BuyMeACoffee$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "BuyMeACoffee",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<BuyMeACoffee$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/BuyMeACoffee.sol:BuyMeACoffee",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<BuyMeACoffee$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "BuyMeACoffee",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<BuyMeACoffee$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/BuyMeACoffee.sol:BuyMeACoffee",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<BuyMeACoffee$Type["abi"]>>;
}