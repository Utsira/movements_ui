from importlib import import_module

from django.apps import AppConfig as BaseAppConfig


class AppConfig(BaseAppConfig):

    name = "movements_ui"

    def ready(self):
        import_module("movements_ui.receivers")
