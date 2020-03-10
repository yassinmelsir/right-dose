Rails.application.routes.draw do
  # include home route?
  get 'administrations/index'
  get 'administrations/show'
  get 'administrations/new'
  get 'administrations/create'
  get 'case_drugs/create'
  get 'indications/index'
  get 'indications/new'
  get 'indications/create'
  get 'indications/edit'
  get 'indications/update'
  get 'indications/destroy'
  get 'rules/index'
  get 'rules/show'
  get 'rules/new'
  get 'rules/create'
  get 'rules/edit'
  get 'rules/update'
  get 'rules/destroy'
  get 'routes/new'
  get 'routes/create'
  get 'routes/destroy'
  get 'presentations/new'
  get 'presentations/create'
  get 'presentations/edit'
  get 'presentations/update'
  get 'cases/new'
  get 'cases/create'
  get 'cases/show'
  get 'paramedic_types/new'
  get 'paramedic_types/create'
  get 'paramedic_types/destroy'
  get 'drugs/new'
  get 'drugs/create'
  get 'drugs/index'
  get 'drugs/edit'
  get 'drugs/update'
  get 'drugs/destroy'
  get 'organizations/new'
  get 'organizations/show'
  get 'organizations/edit'
  get 'organizations/update'
  devise_for :paramedics
  devise_for :admins
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
