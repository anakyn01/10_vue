<template>
    <v-container class="text-center" fluid>
        <v-row>
            <v-col cols="12" md="3">
                <v-tooltip text="tooltip">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props">Hover Over Me</v-btn>
                    </template>
                </v-tooltip>
            </v-col>
            <v-col cols="12" md="3">
                <v-tooltip text="tooltip" model-value @update:model-value="">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props">Hover Over Me</v-btn>
                    </template>
                </v-tooltip>
            </v-col>
            <v-col cols="12" md="3">
                <v-btn>End
                    <v-tooltip activator="parent" location="end">
                    tooltip
                    </v-tooltip>
                </v-btn>
            </v-col>
            <v-col cols="12" md="3">
                <v-btn>Top
                    <v-tooltip activator="parent" location="top">
                    tooltip
                    </v-tooltip>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>

</template>