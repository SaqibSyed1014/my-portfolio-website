import BaseButton from "./BaseButton";

const Footer = () => {
  return (
      <footer className="sticky bottom-0 z-[0] grid grid-cols-12 items-stretch gap-4 p-6">
          <div className="col-span-4">
              <div className="footer-image rounded-2xl overflow-hidden">
                  <img src="https://www.juulvrasdonk.nl/_next/image?url=%2Fimages%2Fprofile.webp&w=3840&q=75" alt=""/>
              </div>
          </div>
          <div className="col-span-8">
              <div className="flex flex-col items-stretch gap-3">
                  <div className="flex items-end">
                      <h2 className="footer-heading">Lets connect</h2>
                      <BaseButton type="button" label="Get in touch" showDot={true}/>
                  </div>
                  <ul className="social-links flex gap-2">
                      <li><a href="">GITHUB</a></li>
                      <li><a href="">Upwork</a></li>
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
