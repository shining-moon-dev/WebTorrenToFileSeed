const Footer = () => {
  // const date = new Date()
  // const currentYear = date.getFullYear()

  return (
    <footer className='text-primary container-fluid'>
      <div className='row'>
        <div className='col text-center py-1 footer font-monospace bg-light my-auto'>
          {/* Copyright {currentYear} &copy; All Rights Reserved -  */}
          WebTorrento Seeder {' '}
          <a target='_blank' href='mailto:superdev0919@gmail.com' rel='noreferrer'>
            Egor Kovalev
          </a>
          <br />
          <img src='/logo.png' width='30' height='30' alt='logo' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
