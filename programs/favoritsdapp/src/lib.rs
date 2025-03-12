use anchor_lang::prelude::*;

declare_id!("2VbyiwpqfLqSVHgNwwjVQEjAYaaKR9QYb9YrVEeFK86J");

#[program]
pub mod favoritsdapp {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
