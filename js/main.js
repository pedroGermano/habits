const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ['01-01', '01-02', '01-06', "01-07", "01-08"],
  water: ['01-04'],
  food: ['01-02'],
  journal: ['01-02'],
  takePills: ['01-02'],
}

nlwSetup.setData(data)
nlwSetup.load()