import { Injectable } from '@nestjs/common';

@Injectable()
export class BlockchainService {
  
  // Ganti nama jadi getLatestValue sesuai permintaan Controller
  async getLatestValue() {
    return { 
      success: true, 
      value: "150" 
    };
  }

  // Ganti nama jadi getValueUpdatedEvents sesuai permintaan Controller
  async getValueUpdatedEvents(fromBlock: any, toBlock: any) {
    return [
      { blockNumber: 123456, transactionHash: "0xabc123...justin", event: "ValueUpdated" },
      { blockNumber: 123457, transactionHash: "0xdef456...unpam", event: "ValueUpdated" }
    ];
  }
}