import BaseButton from "./BaseButton";

const Footer = () => {
  return (
      <footer className="relative lg:sticky lg:bottom-0 z-[0] grid grid-cols-12 items-stretch gap-4 px-3 py-8 md:p-6">
          <div className="md:col-span-4">
              <div className="footer-image rounded-2xl overflow-hidden max-md:hidden">
                  <img src="https://www.juulvrasdonk.nl/_next/image?url=%2Fimages%2Fprofile.webp&w=3840&q=75" alt=""/>
              </div>
          </div>
          <div className="col-span-12 md:col-span-8">
              <div className="flex flex-col items-stretch gap-3 max-md:mb-4">
                  <div className="flex items-start max-sm:gap-3 sm:items-end max-sm:flex-col">
                      <h2 className="footer-heading">Lets connect</h2>
                      <BaseButton type="button" label="Get in touch" showDot={true} classes="" />
                  </div>
                  <ul className="social-links flex gap-6">
                      <li><a href="https://github.com/saqibsyed1014" target="_blank">GITHUB</a></li>
                      <li><a href="https://www.upwork.com/freelancers/uidevelopment" target="_blank">Upwork</a></li>
                  </ul>
              </div>
          </div>
          <div className="col-span-12">
              <div className="flex justify-between text-sm">
                  <p> © Saqib Syed</p>
                  <p>Developed by me</p>
              </div>
          </div>
      </footer>
  )
}

export default Footer;
