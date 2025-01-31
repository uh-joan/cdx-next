import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftNavigationComponent } from 'src/app/core/left-navigation/left-navigation.component';

import { DesignComponent } from './design.component';

const routes: Routes = [
  {
    path: '',
    component: DesignComponent,
    /*children: [
      {
        path: 'color-palette',
        loadChildren: () => import ('./color-palette/color-palette.module').then(m => m.ColorPaletteModule)
      },
      {
        path: 'enterprise-design-system-strategy',
        loadChildren: () => import ('./enterprise-design-system-strategy/enterprise-design-system-strategy.module').then(m => m.EnterpriseDesignSystemStrategyModule)
      },
      {
        path: 'enterprise-design-system-value',
        loadChildren: () => import ('./enterprise-design-system-value/enterprise-design-system-value.module').then(m => m.EnterpriseDesignSystemValueModule)
      },
      {
        path: 'elevation',
        loadChildren: () => import ('./elevation/elevation.module').then(m => m.ElevationModule)
      },
      {
        path: 'foundations-overview',
        loadChildren: () => import ('./foundations-overview/foundations-overview.module').then(m => m.FoundationsOverviewModule)
      },
      {
        path: 'grid-system',
        loadChildren: () => import ('./grid-system/grid-system.module').then(m => m.GridSystemModule)
      },
      {
        path: 'iconography',
        loadChildren: () => import ('./iconography/iconography.module').then(m => m.IconographyModule)
      },
      {
        path: 'illustration-and-imagery',
        loadChildren: () => import ('./illustration-and-imagery/illustration-and-imagery.module').then(m => m.IllustrationAndImageryModule)
      },
      {
        path: 'logos',
        loadChildren: () => import ('./logos/logos.module').then(m => m.LogosModule)
      },
      {
        path: 'principles-overview',
        loadChildren: () => import ('./principles-overview/principles-overview.module').then(m => m.PrinciplesOverviewModule)
      },
      {
        path: 'pictograms',
        loadChildren: () => import ('./pictograms/pictograms.module').then(m => m.PictogramsModule)
      },
      {
        path: 'responsive-design',
        loadChildren: () => import ('./responsive-design/responsive-design.module').then(m => m.ResponsiveDesignModule)
      },
      {
        path: 'typography',
        loadChildren: () => import ('./typography/typography.module').then(m => m.TypographyModule)
      },
      {
        path: 'pattern-library',
        loadChildren: () => import ('./pattern-library/pattern-library.module').then(m => m.PatternLibraryModule)
      },
      {
        path: 'abstract',
        loadChildren: () => import ('./abstract/abstract.module').then(m => m.AbstractModule)
      },

      {
        path: 'figma',
        loadChildren: () => import ('./figma/figma.module').then(m => m.FigmaModule)
      },
      {
        path: 'invision',
        loadChildren: () => import ('./invision/invision.module').then(m => m.InvisionModule)
      },
      {
        path: 'sketch',
        loadChildren: () => import ('./sketch/sketch.module').then(m => m.SketchModule)
      },
      {
        path: 'toolkits',
        loadChildren: () => import ('./toolkits/toolkits.module').then(m => m.ToolkitsModule)
      },
      { path: '',   redirectTo: 'principles-overview', pathMatch: 'full' }
    ]*/
  },
];

@NgModule({
  declarations: [DesignComponent],
  imports: [
    CommonModule,
    LeftNavigationComponent,
    RouterModule.forChild(routes),
  ],
})
export class DesignModule {}
