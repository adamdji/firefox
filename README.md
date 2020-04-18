# Small Web Extensions Repository

## Messenger.com Dark Reader Fix

There is a useless `div` with an exponential left fixed position that causes a horizontal scroll bar and other strange behaviour when the Dark Reader Extension is enabled on FireFox

This extension waits for the `div` to appear and then clears it's styling (deleting it only causes it to reappear) thus fixing the behaviour.
