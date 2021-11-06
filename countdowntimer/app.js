const DitetEl = document.getElementById('days')
const OretEl = document.getElementById('hours')
const MinutatEl = document.getElementById('minutes')
const SekondatEl = document.getElementById('seconds')
const KohaVititRi ="1 Jan 2022"

function KoheMatsi()
{
    const VitiiRi = new Date(KohaVititRi)
    const KohaTashme = new Date()

    const SaSekonda = (VitiiRi - KohaTashme) / 1000
    const Ditet = Math.floor(SaSekonda / 3600 / 24)
    const Oret = Math.floor(SaSekonda / 3600) % 24
    const Minutat= Math.floor(SaSekonda / 60) % 60
    const Sekondat=Math.floor(SaSekonda) % 60
    
    DitetEl.innerHTML = Ditet
    OretEl.innerHTML = Oret
    MinutatEl.innerHTML = RregulloZeron(Minutat)
    SekondatEl.innerHTML = RregulloZeron(Sekondat)


    // console.log(SaSekonda , Ditet, Oret ,Minutat, Sekondat)
}
function RregulloZeron(koha)
{
    return koha < 10 ? (`0${koha}`) : koha;
}


KoheMatsi();
setInterval(KoheMatsi,1000);