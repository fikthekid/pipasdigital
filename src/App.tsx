import { useState } from 'react'
import { MainMenu } from './components/MainMenu'
import { TutorialRegistrasi } from './components/TutorialRegistrasi'
import { TutorialTopUp } from './components/TutorialTopUp'
import { TutorialAktivasi } from './components/TutorialAktivasi'
import { TutorialPengaturan } from './components/TutorialPengaturan'
import { SubTutorialSimpanPin } from './components/SubTutorialSimpanPin'
import { SubTutorialGantiPassword } from './components/SubTutorialGantiPassword'
import { CustomerService } from './components/CustomerService'

export default function App() {
  const [currentView, setCurrentView] = useState('main')

  const handleSelectTutorial = (tutorialType: string) => {
    setCurrentView(tutorialType)
  }

  const handleBack = () => {
    setCurrentView('main')
  }

  const handleBackToPengaturan = () => {
    setCurrentView('pengaturan')
  }

  const handleSelectSubTutorial = (subType: string) => {
    setCurrentView(subType)
  }

  const renderView = () => {
    switch (currentView) {
      case 'registrasi':
        return <TutorialRegistrasi onBack={handleBack} />
      case 'topup':
        return <TutorialTopUp onBack={handleBack} />
      case 'aktivasi':
        return <TutorialAktivasi onBack={handleBack} />
      case 'pengaturan':
        return <TutorialPengaturan onBack={handleBack} onSelectSubTutorial={handleSelectSubTutorial} />
      case 'simpan-pin':
        return <SubTutorialSimpanPin onBack={handleBackToPengaturan} />
      case 'ganti-password':
        return <SubTutorialGantiPassword onBack={handleBackToPengaturan} />
      case 'customer-service':
        return <CustomerService onBack={handleBack} />
      default:
        return <MainMenu onSelectTutorial={handleSelectTutorial} />
    }
  }

  return renderView()
}