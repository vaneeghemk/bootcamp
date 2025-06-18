export default function decorate(block) {
    const image = block.children?.[0]?.children?.[0];
    const name = block.children?.[0]?.children?.[1];
    const company = block.children?.[1]?.children?.[0];
    const email = block.children?.[2]?.children?.[0];

    const wrapper = document.createElement('div');
    wrapper.className = 'contact-block';

    image.className += 'contact--image';
    wrapper.append(image);

    name.className += 'contact--name';
    wrapper.append(name);

    company.className += 'contact--company';
    wrapper.append(company);

    const mailP = email?.children?.[0];
    const mailA = mailP?.children?.[0];
    mailA.className = '';
    mailP.innerHTML = '';
    mailP.append(mailA);
   if(mailP) mailP.className += 'contact--email';
    wrapper.append(mailP);

    block.innerHTML = '';
    block.append(wrapper);
}