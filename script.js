// small interactive helpers
document.getElementById('year').textContent = new Date().getFullYear();

function handleContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // open default mail client with prefilled fields:
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:ssr5534@psu.edu?subject=${subject}&body=${body}`;
}

// vCard download
function downloadVCard(){
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Syed Sarim Raza',
    'EMAIL;TYPE=INTERNET:ssr5534@psu.edu',
    'TEL;TYPE=CELL:814-566-4097',
    'END:VCARD'
  ].join('\n');
  const blob = new Blob([vcard], {type: 'text/vcard'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Syed_Sarim_Raza.vcf';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
