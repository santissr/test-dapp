
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

async function createAccount(accountName: string, keypair: Keypair) {
   const lamports = 
       await connection.getMinimumBalanceForRentExemption(0) + 100000
   const createAccountInstruction = SystemProgram.createAccount({
       fromPubkey: payer.publicKey,
       newAccountPubkey: keypair.publicKey,
       lamports,
       space: 0,
       programId: SystemProgram.programId,
   })
   const createAccountTransaction = await buildTransaction(
       connection, 
       payer.publicKey, 
       [payer, keypair], 
       [createAccountInstruction]
   )
   const signature = await connection.sendTransaction(createAccountTransaction)
   
   newLogSection()
   logNewKeypair(keypair)
   await logTransaction(connection, signature)
   await logBalance(accountName, connection, keypair.publicKey)
}