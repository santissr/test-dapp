
import {
   Connection,
   Keypair,
   PublicKey,
   SystemProgram,
   VersionedMessage,
   VersionedTransaction,
} from "@solana/web3.js"


import { loadKeypairFromFile } from "./utils"


const connection = new Connection(
   "https://api.devnet.solana.com", 
   {
       commitment: 'confirmed',
       confirmTransactionInitialTimeout: 60000,
   },
)

const payer = loadKeypairFromFile(
   require('os').homedir() + '/.config/solana/id.json'
)

const keypairA = Keypair.generate()
const keypairB = Keypair.generate()