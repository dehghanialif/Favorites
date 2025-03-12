import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { assert } from "chai";
import { Favorites } from "../target/types/favorites";  // Import IDL

describe("favorites", () => {
  // Configure the client
  const provider = anchor.AnchorProvider.local();
  anchor.setProvider(provider);

  const program = anchor.workspace.Favorites as Program<Favorites>;
  const user = anchor.web3.Keypair.generate();

  // Generate PDA for Favorites account
  const [favoritesPda, bump] = PublicKey.findProgramAddressSync(
    [Buffer.from("favorites"), user.publicKey.toBuffer()],
    program.programId
  );

  it("Airdrops SOL to the user", async () => {
    const tx = await provider.connection.requestAirdrop(user.publicKey, anchor.web3.LAMPORTS_PER_SOL);
    await provider.connection.confirmTransaction(tx);
  });

  it("Sets user favorites", async () => {
    // Define test input values
    const favoriteNumber = new anchor.BN(7);
    const favoriteColor = "Blue";
    const hobbies = ["Reading", "Gaming"];

    // Send transaction
    await program.methods
      .setFavorites(favoriteNumber, favoriteColor, hobbies)
      .accounts({
        user: user.publicKey,
        favorites: favoritesPda as any,
        systemProgram: SystemProgram.programId,
      })
      .signers([user])
      .rpc();

    // Fetch and assert the stored data
    const account = await program.account.favorites.fetch(favoritesPda);

    assert.equal(account.number.toString(), "7");
    assert.equal(account.color, "Blue");
    assert.deepEqual(account.hobbies, ["Reading", "Gaming"]);
  });
});
