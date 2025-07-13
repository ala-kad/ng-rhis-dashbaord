import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-tree',
  imports: [
    MatTreeModule,
    MatIconModule,
  ],
  templateUrl: './tree.html',
  styleUrl: './tree.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Tree {
  
  menuItems = [
    { label: 'Tableau de bord', icon: 'dashboard' },
    { label: 'Employés', icon: 'people' },
    { label: 'Prévisions', icon: 'event' },
    { label: 'Planning', icon: 'calendar_month' },
    { label: 'Controle des heures', icon: 'schedule' },
    { label: 'Rapports', icon: 'bar_chart' },
    { label: 'Coffre fort', icon: 'lock' },
    { label: 'Restaurant', icon: 'restaurant' }
  ];

  dataSource = EXAMPLE_DATA;

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}

const EXAMPLE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

