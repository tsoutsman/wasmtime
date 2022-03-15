use crate::traphandlers::Trap;
use ::alloc::boxed::Box;

// TODO: temporary fix to satisfy libc dependencies
mod libc {
    pub(crate) type c_int = u32;
    pub(crate) type siginfo_t = usize;
    pub(crate) type c_void = usize;
}

/// Function which may handle custom signals while processing traps.
pub type SignalHandler<'a> =
    dyn Fn(libc::c_int, *const libc::siginfo_t, *const libc::c_void) -> bool + Send + Sync + 'a;

pub unsafe fn platform_init() {
    panic!("TODO: implement traphandlers::theseus::platform_init()");
}

pub fn lazy_per_thread_init() -> Result<(), Box<Trap>> {
    panic!("TODO: implement traphandlers::theseus::lazy_per_thread_init()");
}